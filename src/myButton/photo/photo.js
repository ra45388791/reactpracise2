import React from 'react';

const imageAtt = {
    src: '../../../public/logo192.png',
    alt: 'reactImage',
    style: {
        w: '200px',
        h: '200px',
    }

}



const Photo = () => {
    return (
        <div>
            <img className=''
                src={imageAtt.src}
                alt={imageAtt.alt}
                style={
                    {
                        width: imageAtt.style.w,
                        height: imageAtt.style.h
                    }
                } />
        </div>
    );
}

export default Photo;
