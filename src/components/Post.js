/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        height={420}
        width={600}
        className="mb-4 rounded"
      />

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <div>{post.frontmatter.category}</div>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Leia mais</a>
        </Link>
        <div className="flex items-center">
          <Image
            className="mx-4 rounded-full hidden sm:block"
            src={post.frontmatter.author_image}
            alt={post.frontmatter.author}
            objectFit="cover"
            height={40}
            width={40}
          />
          <h3 className="text-gray-700 font-bold mx-4">
            {post.frontmatter.author}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
