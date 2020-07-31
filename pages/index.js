import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Julia Calabria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="min-h-screen">
        <div className="container mx-auto px-5">
          <h1 className="text-6xl pt-20 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Hi, I'm Julia Calabria.
          </h1>
        </div>

        <section>
          <div className="md:mx-20 sm: mx-auto my-8 mb-8 md:mb-16 max-w-md">
            <div className="mx-5 sm: mx-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                feugiat mi sed commodo sagittis. Nunc interdum a quam eu
                scelerisque. Mauris ac porttitor libero. Etiam tristique
                ultricies ligula sed auctor. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Aliquam erat volutpat. Maecenas
                venenatis tristique fringilla. Suspendisse tempus congue nisl,
                pretium tristique nunc molestie non. Suspendisse potenti. Mauris
                eu diam vitae lacus facilisis eleifend a vel mauris. Morbi in
                sapien et mi condimentum eleifend sed sed tortor. Nulla aliquet
                ligula nibh, vitae placerat tortor volutpat tincidunt.
              </p>
            </div>
          </div>
        </section>
        <section id="links">
          <div className="d-flex flex-row mx-10">
            <div className="col">
              <a href="#projects" className="text-gray-600">
                View projects
              </a>
            </div>
            <div className="col">
              <a href="#contact" className="text-gray-600">
                Let´s get it touch
              </a>
            </div>
          </div>
        </section>
      </section>
      <section id="projects">
        <div className="bg-black border-t-2 mt-10 text-white px-10 pt-8 pb-8">
          <h1 className="text-4xl font-semibold tracking-tighter">Projects</h1>
          <section>
            <div className="grid  sm:grid-cols-1 md:grid-cols-3 mt-10">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  sizes="404px"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/a48126101224991.Y3JvcCwxMjE5LDk1MywyMDgsNTA5.png"
                  srcset="https://mir-s3-cdn-cf.behance.net/projects/115/a48126101224991.Y3JvcCwxMjE5LDk1MywyMDgsNTA5.png 115w, https://mir-s3-cdn-cf.behance.net/projects/202/a48126101224991.Y3JvcCwxMjE5LDk1MywyMDgsNTA5.png 202w, https://mir-s3-cdn-cf.behance.net/projects/230/a48126101224991.Y3JvcCwxMjE5LDk1MywyMDgsNTA5.png 230w, https://mir-s3-cdn-cf.behance.net/projects/404/a48126101224991.Y3JvcCwxMjE5LDk1MywyMDgsNTA5.png 404w, https://mir-s3-cdn-cf.behance.net/projects/max_808/a48126101224991.Y3JvcCwxMjE5LDk1MywyMDgsNTA5.png 808w"
                  alt="ONCE Y FLORES · E-COMMERCE"
                  class="ProjectCoverNeue-image-1MZ js-cover-image"
                />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    ONCE Y FLORES - e-commerce
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  sizes="404px"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/809b5c101224749.Y3JvcCw3NzksNjA5LDU3MCwyMzc.png"
                  srcset="https://mir-s3-cdn-cf.behance.net/projects/115/809b5c101224749.Y3JvcCw3NzksNjA5LDU3MCwyMzc.png 115w, https://mir-s3-cdn-cf.behance.net/projects/202/809b5c101224749.Y3JvcCw3NzksNjA5LDU3MCwyMzc.png 202w, https://mir-s3-cdn-cf.behance.net/projects/230/809b5c101224749.Y3JvcCw3NzksNjA5LDU3MCwyMzc.png 230w, https://mir-s3-cdn-cf.behance.net/projects/404/809b5c101224749.Y3JvcCw3NzksNjA5LDU3MCwyMzc.png 404w, https://mir-s3-cdn-cf.behance.net/projects/max_808/809b5c101224749.Y3JvcCw3NzksNjA5LDU3MCwyMzc.png 808w"
                  alt="HELPERS · INSTITUCIONAL"
                  class="ProjectCoverNeue-image-1MZ js-cover-image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    HELPERS - INSTITUCIONAL
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  sizes="404px"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png"
                  srcset="https://mir-s3-cdn-cf.behance.net/projects/115/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 115w, https://mir-s3-cdn-cf.behance.net/projects/202/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 202w, https://mir-s3-cdn-cf.behance.net/projects/230/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 230w, https://mir-s3-cdn-cf.behance.net/projects/404/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 404w, https://mir-s3-cdn-cf.behance.net/projects/max_808/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 808w"
                  alt="NAVARRO CORREAS · DOLORES EYEWEAR CASE STUDY"
                  class="ProjectCoverNeue-image-1MZ js-cover-image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    NAVARRO CORREAS - DOLORES EYEWEAR CASE STUDY
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  sizes="404px"
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png"
                  srcset="https://mir-s3-cdn-cf.behance.net/projects/115/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 115w, https://mir-s3-cdn-cf.behance.net/projects/202/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 202w, https://mir-s3-cdn-cf.behance.net/projects/230/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 230w, https://mir-s3-cdn-cf.behance.net/projects/404/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 404w, https://mir-s3-cdn-cf.behance.net/projects/max_808/65a99399253401.Y3JvcCwxMDQ1LDgxOCwyMDcsMA.png 808w"
                  alt="NAVARRO CORREAS · DOLORES EYEWEAR CASE STUDY"
                  class="ProjectCoverNeue-image-1MZ js-cover-image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    NAVARRO CORREAS - DOLORES EYEWEAR CASE STUDY
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section id="contact">
        <div className=" mt-10  px-10 pt-8 pb-8">
          <h1 className="text-4xl font-semibold tracking-tighter">
            Let's get in touch
          </h1>
          <section>
            <div className="w-full max-w-xl">
              <form className=" px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="title"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="title"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Contact me
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
