import React from 'react'
import MainLayout from '../../components/MainLayout'
import Breadcrumbs from '../../components/Breadcrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPost from './container/SuggestedPost'

const breadCrumbsData = [
    { name: "Home", link: "/"},
    { name: "Blog", link: "/blog"},
    { name: "Article title", link: "/blog/1"}
]

const postsData = [
    {
        _id: "1",
        image: images.Post1Image,
        title: "Help Children Get Better Education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
    {
        _id: "2",
        image: images.Post1Image,
        title: "Help Children Get Better Education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
    {
        _id: "3",
        image: images.Post1Image,
        title: "Help Children Get Better Education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
    {
        _id: "4",
        image: images.Post1Image,
        title: "Help Children Get Better Education",
        createdAt: "2023-01-28T15:35:53.607+0000"

    },
]

const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education"
]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5'>
            <article className='flex-1'>
                <Breadcrumbs data={breadCrumbsData} />
                <img 
                    src={images.Post1Image}
                    alt='article'
                    className='rounded-xl w-full'
                />
                <Link
                    to='/blog?category=selectedCategory'
                    className='text-primary text-sm font-roboto inline-block mt-4'
                >
                    EDUCATION
                </Link>
                <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard'>
                    Help Children Get Better Education
                </h1>
                <p className='leading-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
                </p>
            </article>
            <SuggestedPost header="Lastest Article" posts={postsData} tags={tagsData}/>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage