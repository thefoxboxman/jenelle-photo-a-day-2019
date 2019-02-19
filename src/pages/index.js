import React from "react";
import Image from "gatsby-image";
import Layout from "../components/layout";
import { graphql } from "gatsby";


export const query = graphql`
 {
  allSanityPost{
		edges{
			node{
		
    _id
    title
		description
		publishedAt
		slug{
			current
		}
    mainImage{
      asset{
				fluid{
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
    <ul style={{
			listStyle: "none",
	}}>
      {data.allSanityPost.edges.map(({ node: post }) => (
        <li key={post.publishedAt}>
					<h2 style={{
						textAlign: "center",
						
						flex: '1 45%',
						flexWrap: 'wrap',
						maxWidth: '45%',
						margin: '2rem'
					}}>{post.title}</h2>
          <Image fluid={post.mainImage.asset.fluid} alt={post.title} />
					
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
