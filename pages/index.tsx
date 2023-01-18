import Article from "@/components/Article";
import Navbar from "@/components/Navbar";
import TagButton from "@/components/TagButton";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const articles = [...Array(5)].map((_, index) => {
    return {
      id: index + 1,
      slug: "how-to-learn-redux",
      title: "How to Learn Redux",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas etiam morbi varius sapien. Eu arcu morbi tortor rhoncus. Donec pellentesque diam orci enim, nibh diam. Nulla id ut risus quisque felis tristique metus...",
      thumbnail: "/images/thumbnail.png",
      category: "Technology",
      date: "2022-09-20 16:00:00",
      author: {
        name: "John Doe",
        photo: "/images/author.png",
      },
    };
  });

  const categories = [...Array(9)].map((_, index) => {
    return {
      id: index + 1,
      name: "Technology",
    };
  });

  return (
    <div>
      <Head>
        <title>Noobium - Medium Clone</title>
        <link rel="ico" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-[720px] mx-auto py-24">
        <div className="mb-16">
          <h1 className="text-sm font-sans mb-4">Your Categories</h1>
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <TagButton label={item.name} key={item.id} size="lg" />
            ))}
          </div>
        </div>

        {articles.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            author={item.author}
            category={item.category}
            date={item.date}
            content={item.content}
            thumbnail={item.thumbnail}
            url={`/article/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
