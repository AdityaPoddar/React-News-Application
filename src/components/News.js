import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// rce is used as a snippet to generate the boiler plate for a class component
// this.state ke madat se values aayengi
// constructor ke andar hoti ye
// state vs props : state use hota jab frequent changes hota nahi toh props is good

export class News extends Component {
  // not working rn
  static defualtProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  constructor(props) {
    super(props);
    // this.state = { articles: [], page: 1, loading: false };
    this.state = { articles: [], page: 1, loading: true }; // infinite scroll ke chakar mai
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - TazaKhabar`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // sab se phele toh do button add kiye jisme html arrow sign diye dono mai d-flex lagaye
  // previous ko hidden diye jisse kya hoga jab page 1 ya 1 se kaam toh hidden hojayega
  // don btn mai onclick lagye
  // contstuctor ka state mai page ka value add kiye
  // url mai page=1 jo ki default hai aur aur pagesize include kiye
  // click ke func ko asyn banaye
  // cmd se copy paste kiye code ko
  // is baar url mai ${this.state.page+1} template literal ke madat se ye likhe aur page ka value page+ 1 kardiye
  // class use horaha hai toh this.state toh har jagah laga dena bhai
  // same prev ke liye bas diff  ${this.state.page-1} hai
  // ek prob aaraha tha jese next toh chal raha tha par articles khatam toh usko thik karne ke liye
  // ek formula apnaye totalresult/pagesize> jis page mai hai usse upar hai toh kuch mat karo warna equal ya kaam hai toh display kardo
  // totalresult chai cmd mai setState mai leliye
  // math.ceil use kiye integer number apne ke liye

  // spinner
  // this.state = {articles: [] , page : 1  , loading : false} idhar loading ko false kiya
  // Spinner ko thik heading ke nixhe add kiye
  // shuru mai loading ko true kiye jab data nahi tab
  // async await ka fyda yehi hai ki
  // data load ke baad wapis false kardiye
  //{ this.state.loading && <Spinner/>} ye condtion diya tab loading true tab hi spinner chalega

  // country and category
  // sabse phele app.js mai jake country and category pass kiye
  // second mai ek defaultProps create kiye usme value diye
  // url mai update kiye hardcoded nahi

  // componentDidMount : ye ek react ka lifecycle ka hissa hai
  // sabse phele class render hoga uske badd render uske baad cmd.

  // updateNews ke madat se shuru mai jo code clutter horaha tha jo ki humlog tino cmd next and prev sabme bula rahe thee vo nahi hoga
  // ek hi baar bulayege sabse call kardenge aur sabme bas setsate page unke hisab se laga denge

  updateNews = async () => {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.state.loading = true;
    let res = await fetch(url);
    this.props.setProgress(50);
    let data = await res.json();
    this.props.setProgress(70);
    // console.log(data);
    // setState ke baad equal to nahi hoga
    console.log(
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
      })
      );
      this.state.loading = false;
      this.props.setProgress(100);
  };

  async componentDidMount() {
    // console.log(data);
    // setState ke baad equal to nahi hoga

    // console.log(this.state)
    // console.log("cdm");

    this.updateNews();
  }
  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  // handlePrevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  // ye func mai bas upar updateNEws ko call karne se nahi hua uske liye humko articles ko concat karna padega
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.state.loading = true;
    let res = await fetch(url);
    let data = await res.json();

    console.log(
      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
        // loading :  true
      })
    );
    // this.state.loading = false;
  };

  render() {
    return (
      <div>
        {/* <div className="container my-3"> */}
        <h2 className="text-center">
              Taza KhABAR | Top{" "}
              {this.capitalizeFirstLetter(this.props.category)} Headlines |
              Country : {this.props.country}
            </h2>
              {this.state.loading && <Spinner />}

              <InfiniteScroll 
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.page + 1 !== this.state.totalResults}
              loader={ <Spinner />}
              // style={{ display: 'flex', flexDirection: 'row', margin : "0px 10px" }}
            >
            <div className="container">
          <div className="row d-flex">
            
            
            
            {/* humlogo ko jo card wala ddiv wapis wapis deikhna hai toh usko .map ke through iterate karenge  */}
            {/* usme ek unique key chiye jo ki jaha return kar rahe hai usko dena padega */}
            {/* return toh karna hi padega naya aaray jab banega tab */}
            {/* phir elements. kar kar ke andar ka jo value hai uske lerahe hai . operator ke madat se [''] ye bhi use kar sakte hai */}

            {/* infinite scroll add kiye uske kuch atributes mai update kiye
                datalength ko article.len
                fetchMoreData khud hi banaye
                hasmore ko condition diye ki if anne wala data agar total result se upar hai toh waha data khatam
                loader mai apna spinner comp diye 
                bohot sare complication thee jese ki unlimited data dikhane ke liye fetchMoreDta mai humko data ko concat karna pada 
                uske baad row and container ke bhi upar rakhna pada kyu ki ek horizontal scroll and ek article ek pura line le raha tha 
                loading ka value bhi change karte rahena pada*/}

            
              {this.state.articles.map((elements) => {
                // console.log("ren")
                // console.log(this.articles)
                // console.log(elements) // return an object

                return (

                      <div className="col-md-3" key={elements.url}>
                        <NewsItem
                          title={elements.title}
                          desc={elements.description}
                          imageUrl={elements.urlToImage}
                          urlId={elements.url}
                          author={elements.author}
                          date={elements.publishedAt}
                          source={elements.source.name}
                          />
                      </div>
                    
                    );
                  })}
          </div>
                  </div>
            </InfiniteScroll>
            
            {/* <div className=" d-flex justify-content-between">
            <button
            hidden={this.state.page <= 1}
            className="btn btn bg-dark text-white my-3"
            onClick={this.handlePrevClick}
            >
            {" "}
            &larr; Previous
            </button>
            <button
            disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn text-white  bg-dark  my-3"
              onClick={this.handleNextClick}
              >
              Next &rarr;
              </button>
            </div> */}
            </div>
            // </div>
    );
  }
}

export default News;
