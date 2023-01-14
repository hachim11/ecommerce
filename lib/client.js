import  SanityClient  from "@sanity/client";
// import  ImageUrlBuilder  from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";



export const client = SanityClient({

    projectId:'58z9n4k3',
    dataset:'production',
    apiVersion:'2022-12-27',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) =>( builder.image(source)
) 