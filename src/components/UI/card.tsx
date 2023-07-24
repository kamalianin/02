import React from 'react';

type cardProps = {
    ImgPath: string,
    Name: string,
    Text: string,
    Href: string,
    BtnText: string
}

const Card = ({ImgPath, Name, Text, Href, BtnText}:cardProps) => {
    let ImageContent = <></>;
    if (ImgPath) {
       ImageContent = <img src={ImgPath} className="card-img-top" alt="Изображение"/>
    }
    return (
        <div className="card">
            <div className="card-body">
                {ImageContent}
                <h5 className="card-title">{Name}</h5>
                <p className="card-text">{Text}</p>
                <a href={Href} className="btn btn-primary">{BtnText}</a>
            </div>
        </div>
    );
};

export default Card;