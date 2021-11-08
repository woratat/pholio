import React from 'react'
import StoriesCard from './StoriesCard'

const stories = [
    {
        name: "Maaru",
        src: "/../public/images/20200503_120213.jpg",
        profile: "/../public/images/20200508_081446.jpg",
    },
    {
        name: "Cat",
        src: "/../public/images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
        profile: "/../public/images/egypt_kitty_social.jpg",
    },
    {
        name: "Capybara",
        src: "/../public/images/Zyc0g9Cl_400x400.jpg",
        profile: "/../public/images/72bccf79fdf731dbd98cd9a1de812080.jpg"
    },
    {
        name: "Hippopotamus",
        src: "/../public/images/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2hpcHBvLXN1bnNjcmVlbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==.jpg",
        profile: "/../public/images/1tujlsdjl3_Medium_WW1113453.jpg"
    },
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoriesCard name={story.name} src={story.src} profile={story.profile} key={story.src}/>
            ))}
        </div>
    )
}

export default Stories
