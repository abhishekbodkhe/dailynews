// Components/News.js

import { React, useState, useEffect } from "react";
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
`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
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
`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page + 1
			}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
		setPage(page + 1);
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
	};

	return (
		<InfiniteScroll
			//This is important field to render the next data
			dataLength={articles.length}
			next={fetchData}
			hasMore={
				articles.length < totalResults
			}
			loader={
				<h4 className="m-5 font-semibold block text-[25px] text-center">
					Loading...
				</h4>}
			endMessage={
				<p style={{ textAlign: "center" }} className=" m-5 font-semibold block text-[25px]">
					Yay! You have seen it all
				</p>
			}
		>
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
		</InfiniteScroll>
	);
}

export default News;
