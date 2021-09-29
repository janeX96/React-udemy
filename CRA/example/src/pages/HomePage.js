import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est orci. 
                Fusce ornare, ex et cursus pellentesque, est ligula rhoncus ante, vitae porttitor justo sapien eu mi. 
                idunt erat commodo. Pellentesque non enim at velit suscipit euismod.`
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Jan Kowalski",
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est orci. 
                Fusce ornare, ex et cursus pellentesque, est ligula rhoncus ante, vitae porttitor justo sapien eu mi. 
                Fusce fermentum nulla ac neque venenatis, a eleifend magna feugiat. Morbi varius et dui in efficitur. 
                Morbi lectus diam, efficitur ac consectetur congue, tempor scelerisque velit. Mauris sagittis felis a est sagittis, 
                eu tincidunt erat commodo. Pellentesque non enim at velit suscipit euismod.`
    },
    {
        id: 3,
        title: "Czym jest materia i ciemna energia?",
        author: "Anna Jarawska",
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est orci. 
                Fusce ornare, ex et cursus pellentesque, est ligula rhoncus ante, vitae porttitor justo sapien eu mi. 
                Fusce fermentum nulla ac neque venenatis, a eleifend magna feugiat. Morbi varius et dui in efficitur. 
                Morbi lectus diam, efficitur ac consectetur congue, tempor scelerisque velit. Mauris sagittis felis a est sagittis, 
                eu tincidunt erat commodo. Pellentesque non enim at velit suscipit euismod.`
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>  //przekazuje wszystkie właściwości
    ))

    return ( 
        <div className="home">
            {artList}
        </div> );
}
 
export default HomePage;