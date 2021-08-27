import React from 'react'

export default function SocialShare(props) {
    return (
        <div className="col-sm-12 share-btns px-0 my-3">
            <a
                href={"https://www.facebook.com/sharer/sharer.php?u=" + props.url + "&quote=" + encodeURI(props.text) + " #" + props.tag + ""}
                // className="social mb-2 facebook btn-floating"
                className="social facebook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-facebook"></i> Facebook
            </a>
            &nbsp;
            <a
                href={"https://twitter.com/intent/tweet?text=" + encodeURI(props.text) + "&url=" + props.url + "&hashtags=" + props.tag + ""}
                // className="social mb-2 twitter btn-floating"
                className="social twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-twitter"></i> Twitter
            </a>
            &nbsp;
            <a
                href={"whatsapp://send?text=" + encodeURI(props.text) + " " + props.url + ""}
                // className="social mb-2 whatsapp btn-floating"
                className="social whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            &nbsp;
        </div>
    )
}
