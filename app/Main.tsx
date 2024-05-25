import IconHero from '@/components/IconHero'
import CoverWrapper from '@/components/cover-wrapper'
import siteMetadata from '@/data/siteMetadata'
import Me from '/public/static/images/me.jpg'
import Aside from '@/components/Aside'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div className="page-scroller">
      <CoverWrapper img={Me} />
      <div className="page page-has-cover page-has-icon page-has-image-icon full-page  index-page mx-auto max-w-4xl py-6 lg:py-10">
        <IconHero />
        <h1 className="title md:mt-6 lg:mt-10">{siteMetadata.title}</h1>
        <div className="page-content page-content-has-aside">
          <article className="page-content-inner">
            <div className="collection block">
              <div className="collection-header">
                <div className="collection-header-title">Blog Posts</div>
              </div>
              {posts?.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                  {/* {posts.map((post, index) => (
          <article 
            key={post._id}
            className="group relative flex flex-col space-y-2"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
                priority={index <= 1}
              />
            )}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            {post.description && (
              <p className="text-muted-foreground">{post.description}</p>
            )}
            {post.date && (
              <p className="text-sm text-muted-foreground">
                {formatDate(post.date)}
              </p>
            )}
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </article>
        ))} 
      </div>
    ) : (
      <p>No posts published.</p>
    )} 

                  {updatedPosts.map((post, idx) => (
                    <PostCard post={post} key={post.title} image={post.image} />
                  ))}*/}
                </div>
              ) : (
                <p>No posts published.</p>
              )}{' '}
            </div>
          </article>
          <Aside />
        </div>
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 dark:hover:text-primary-400 hover:text-primary-600"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
     {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}{' '}
    </div>
  )
}
