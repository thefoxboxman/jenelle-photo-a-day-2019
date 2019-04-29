import React from "react";
import Image from "gatsby-image";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from 'styled-components';


export const query = graphql`
         {
           allSanityPost(sort: { fields: [publishedAt], order: [DESC]}, limit: 30) {
             edges {
               node {
                 _id
                 title
                 description
                 publishedAt
                 slug {
                   current
                 }
                 mainImage {
                   asset {
                     fluid {
                       ...GatsbySanityImageFluid
                     }
                   }
                 }
               }
             }
           }
         }
       `;

const IndexPage = ({ data }) => (
	<Layout>
		<BannerWapper>
			<h1 id="banner">Jenelle's Photo A Day</h1>
		</BannerWapper>
		<ul style={{ listStyle: "none" }} >
		{data.allSanityPost.edges.map(({ node: post }) => (
				<li key={post._id}>
					{/*		<h2 style={{
						textAlign: "center",
						
						flex: '1 45%',
						flexWrap: 'wrap',
						maxWidth: '45%',
						margin: '2rem'
					}}>{post.title}</h2>
          <Image fluid={post.mainImage.asset.fluid} alt={post.title} />
					

				*/}
					<DisplayWrapper>
						<div id="container">


							<div id="title">
								{post.title}
							</div>
							<div id="image">
								<Image fluid={post.mainImage.asset.fluid} alt={post.title} />
							</div>
							<div id="text">
								{post.description}
							</div>
						</div>


					</DisplayWrapper>

				</li>
			))}
		</ul>



	</Layout>
);

export default IndexPage;

/* CSS in JS Style Components */

const BannerWapper = styled.div`
#banner {
	text-align: center;
	font-size:1.5rem;
	margin: 1rem;
	letter-spacing: 0.1rem;
	font-family: Georgia, 'Times New Roman', Times, serif;
}
`  /* end BannerWrapper */

const DisplayWrapper = styled.div`
#container{
	/* grid area declarations */

	#title {grid-area: title; }
	#image {grid-area:image;  }
	#text {grid-area:text;  }

	display: grid;
	grid-template-columns: 1fr 1fr 20fr 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 10px;
	background-color: black;
	color: white;

		grid-template-areas: 
	
	" . . title     . . "
	" . image image  image . "
	" . . text  . . ";

	#title{
		color: hsla(0, 22%, 93%, 1.0);
margin:0.5rem 0 0;
padding-top: 2.0rem;
text-align: center;
text-transform: capitalize;
font-size: 1.0rem;
letter-spacing:0.1rem;
line-height: 0.9rem;
font-family: Georgia, 'Times New Roman', Times, serif;
	}

	#image{

	}
#text{
	color: hsla(0, 22%, 93%, 0.8);
	margin: 0.5rem 0;
	font-size: 0.7rem;
	letter-spacing: 0.1rem;
	line-height: 0.9rem;
	font-family: Georgia, 'Times New Roman', Times, serif;

}

}
` /* end DisplayWrapper */
