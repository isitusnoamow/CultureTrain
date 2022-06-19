import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './cultures.css'
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
]


function Usa(){

    const [slide, setSlide] = useState(0);

    function slideChange(index) {
        console.log(index);
        setSlide(index);
    }

    function hideTransition(){
        console.log('clicked');
        setSlide(20);
    }

    return(
        <div className="main">
            <h1 className="title">Culture Of USA</h1>
            <div className="area">
                {(() => {
                    switch(slide) {

                        case 0:
                            return(
                            <>
                                <h1 className="subtitle">Ethnicity</h1>
                                <p className="description-eth-us">Many Americans can identify no discernible ethnic identification after decades of immigration and acculturation, describing themselves just as "American," while others claim mixed identities. The United States census of 2000 established a new category for people who identified as members of more than one race, and 2.4 percent of the 281.4 million people enumerated picked this multiracial classification. Those numbers had risen to 2.9 percent of 308.7 million people in the 2010 census, ten years later.
</p>
                            </>
                            )
                        case 1: 
                            return( 
                            <>
                                <h1 className="subtitle">Food</h1>
                                <p className="description-food">Europeans, indigenous Native Americans, African Americans, Asians, Pacific Islanders, and a variety of other cultures and traditions have all had a significant influence. While some American cuisine is fusion, several sections of the country have distinct regional cuisines. The inflow of immigrants from many countries led to a considerable expansion of American cuisine in the 19th and 20th centuries. As a result, the current wide diversity of food specialties across the country is possible.
</p>
                                <div class="foodflex"><img style={{height:"110px", borderRadius:"16px"}} src="https://media.timeout.com/images/103708865/image.jpg"></img> </div>
                            </>
                            )
                        case 2:
                            return(
                                <>
                                    <h1 className="subtitle">Art</h1>
                                    <p className="description-art">Throughout the big cities, furniture makers and related craftspeople were developed, but in the English colonies, locally made ceramics remained steadfastly utilitarian until the 19th century, with the exception of a few fancy products. The American Revolution sparked a surge in demand for patriotic art, particularly history paintings, while other artists documented the frontier.
</p>
                                    <img src="http://www.arthistoryarchive.com/arthistory/americanscene/images/GrantWood-American-Gothic-1930.jpg" style={{height:"150px"}}></img>
                                    
                                </>
                            )
                        case 3:
                            return(
                                <>
                                    <h1 className="subtitle">Music</h1>
                                    <p className="description-art">The United States' music represents the country's multi-ethnic population through a wide range of styles. It's a mash-up of music influenced by, among other things, the music of the United Kingdom, West Africa, Ireland, Latin America, and continental Europe. The sound of American music may be heard all across the world. Some types of American popular music have attained a near-global following since the turn of the twentieth century. </p>
<iframe width="231" height="130" src="https://www.youtube.com/embed/jqi8a21ufqU" title="One Hour Playlist of Patriotic Songs and Marches | Classic American Patriotic Songs | Forth of July" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    
                                </>
                            )
                        
                            case 4:
                                return(
                                    <>
                                        <h1 className="subtitle">Culture</h1>
                                        <p className="description-culture">The United States of America's culture is predominantly Western in origin, but it is influenced by European Americans, Asian Americans, African Americans, Latin Americans, and Native Americans, as well as their civilizations. Dialect, music, the arts, social customs, food, and folklore all have their own unique social and cultural traits in the United States. Due to the vastness of American culture, there are numerous interwoven but distinct social subcultures within the country, some of which are not geographically bound. </p>                                   
                                    </>
                                )
                        
                            case 5:
                                return(
                                    <>
                                        <h1 className="subtitle">Entertainment</h1>
                                        <p className="description-ent-us">Americans entertain them through a multitude of activities, including film, television, sports, and music. The most popular sport in America is American football, with over 56% of all Americans being fans. Hollywood, the most famous global producer of films, also produces films for the American people to enjoy.
</p>
                                        <div><img src="https://static.newarena.com/wp-content/uploads/2020/11/Cowboys-3.jpg" height="130" style={{borderRadius:"16px"}}></img></div>                                       
                                    </>
                                )
                            
                            case 6:
                                return(
                                    <>
                                        <h1 className="subtitle">Landmarks</h1>
                                        <div className="pictures"><img height="200" src="http://4.bp.blogspot.com/-HCJkZwvg4JU/U3jWDyX3e6I/AAAAAAAAFR8/aeIpszJ00Pk/s1600/statue-of-liberty.jpg"></img><img src="https://ghosty-production.s3.amazonaws.com/fotospot_spots/Washington-Monument-Fotospot_1d8c2a43671efca2c25c52b43c288ca5/large.jpg" height="200"></img><img src="https://www.canyon-news.com/wp-content/uploads/2020/06/Mount-Rushmore.jpeg
" height="200"></img></div>
                                        <h1 style={{fontSize:"29px"}}>The Statue of Liberty, The Washington Monument, Mount Rushmore</h1>
                                    </>
                                )
                        
                        case 20:
                            return <></>







                    }
                })()}
            </div>
            <ImageGallery 
            items={images}
            infinite={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={slideChange}
            onBeforeSlide={hideTransition}
            >
            
            </ImageGallery>
            <Link to="/"><button className="backa">Back </button></Link>
        </div>
    )
}

export default Usa;