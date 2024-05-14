// Components/News.js
// apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616
// apiKey=36f3e29b704f41339af8439dc1228334
// b943d51cd6a843bb9835c1843789019c
import { React, useState, useEffect } from "react";
// import axios from "axios" ;
import Newsitem from "./Newsitem";
// import Image from "../Images/News1.jpg";
import InfiniteScroll
	from "react-infinite-scroll-component";

function News(props) {
	let category = props.category;
	let [articles, setArticles] = useState([]);
	let [totalResults, setTotalResults] = useState(0);
	let [page, setPage] = useState(1);

  let Image = 'https://images.pexels.com/photos/3944418/pexels-photo-3944418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

	let resultNews = async () => {
		const url =
`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b943d51cd6a843bb9835c1843789019c`;
		// let parsedData = await axios.get(url) ;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
	};

	useEffect(() => {
		resultNews();
	}, []);

	let fetchData = async () => {
		const url =
`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b943d51cd6a843bb9835c1843789019c`;
		setPage(page + 1);
		// let parsedData = await axios.get(url);
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		setArticles(articles.concat(parsedData.articles));
	};

	return (
		// <InfiniteScroll
		// 	//This is important field to render the next data
		// 	let dataLength= {(articles.length ? articles.length : 20 )}
		// 	next={fetchData}
		// 	hasMore={
		// 		articles.length < totalResults
		// 	}
		// 	loader={
		// 		<h4 className="m-5 font-semibold block text-[25px] text-center">
		// 			Loading...
		// 		</h4>}
		// 	endMessage={
		// 		<p style={{ textAlign: "center" }} className=" m-5 font-semibold block text-[25px]">
		// 			Yay! You have seen it all
		// 		</p>
		// 	}
		// >
			<div className="">
				<div className=" mt-5 flex flex-wrap gap-2  justify-center">
					{articles.map((element) => {
						return (
							<div className="" key={element.url}>
								<Newsitem
									sourceName={element.source.name}
									title={element.title}
									desc={element.description}
									imageURL=
									{element.urlToImage ?
										element.urlToImage :
										Image}
									newsUrl={element.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		// </InfiniteScroll>
	);
}

export default News;
