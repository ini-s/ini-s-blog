import Head from "next/head";

import { client } from "@/client";

import { groq } from "next-sanity";

import BlogContent from "@/components/BlogContent";

import { Post } from "@/types";

export interface PostProps {
	posts: Post[];
}

const query = groq`*[_type == 'post']{
	...,
	author->,
	categories[]->
  } | order(_createdAt asc)`;

export default function Home({ posts }: PostProps) {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<BlogContent posts={posts} />
		</>
	);
}

export async function getStaticProps() {
	const posts = await client.fetch(query);

	return {
		props: { posts },
	};
}
