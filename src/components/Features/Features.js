import React from "react";
import s from "./Features.module.css";
import c from "../../common/commonStyles.module.css";
import img1 from "./img/photo_features_1.jpg";
import img2 from "./img/photo_features_2.jpg";


function Features() {
    return (
        <div className={s.features}>
            <div className={`${s.titleSection} ${c.titleCommon}`}>
                What will you get
            </div>
            <div className={s.block1}>
                <div className={`${s.titleBlock} ${c.titleCommon}`}>
                    Modern digital wedding site
                </div>
                <div className={s.photo1}>
                    <div className={s.photo1_img}>
                        <div className={s.photo_rightShadowElement}></div>
                    </div>
                </div>
                <div className={s.photo2}>
                    <div className={s.photo2_img}>
                        <div className={s.photo_rightShadowElement}></div>
                    </div>
                </div>
                <div className={s.text1}>
                    <div className={s.titleText}>
                        EASY TO CREATE AND USE
                    </div>
                    <div className={s.text}>
                        You do not have to be technician guru to create you site or pay some developers and wait for the
                        results a few month.
                        Just choose design, add descriptions, a few photos and go!
                    </div>
                </div>
                <div className={s.text2}>
                    <div className={s.titleText}>
                        ADAPTIVE SITE
                    </div>
                    <div className={s.text}>
                        Your wedding page will have the same structure and stay pretty in every type of gadget.
                    </div>
                </div>
                <div className={s.text3}>
                    <div className={s.titleText}>
                        TRENDY DESIGNS
                    </div>
                    <div className={s.text}>
                        There are several modern designs for any taste. You can use all possible designs and change them
                        any time you wish.
                    </div>
                </div>
                <div className={s.text4}>
                    <div className={s.titleText}>
                        MOBILE APPLICATION
                    </div>
                    <div className={s.text}>
                        Free mobile application for you and your guests synergy before, during and after this special
                        day.
                        Application provides all the event participants possibility to communicate each other using the
                        wall and personal messages.
                        Also everyone can upload their photos and videos using the application.
                    </div>
                </div>
            </div>
            <div className={s.block2}>
                <div className={`${s.block2_title} ${c.titleCommon}`}>
                    Assistance in your wedding organisation
                </div>
                <div className={s.block2_text1}>
                    <div className={s.titleText}>
                        ORGANISATIONAL ASPECTs
                    </div>
                    <div className={s.text}>
                        Using the site you can provide all necessary organisational aspects for your guests.
                        They won't call you every time they need some information about your wedding, they will
                        have all aggregated in one place online point of access to any necessary information
                        regarding the wedding: wedding schedule, maps, how to get tips, their table on the ceremony,
                        and any useful info you want to share! Any changes - update the information and your guests
                        will see the changes instantly!
                    </div>
                </div>
                <div className={s.block2_text2}>
                    <div className={s.titleText}>
                        GUESTS ONLINE FEEDBACKS
                    </div>
                    <div className={s.text}>
                        Using the site online RSVP form your guests will be able to confirm/reject their presence and
                        answer any questions you want to know (drink/dishes preferences, single/married, etc.)
                    </div>
                </div>

                <div className={s.block2_text3}>
                    <div className={s.titleText}>
                        GUEST SEEDLING. GET EVERYONE ACQUAINTED
                    </div>
                    <div className={s.text}>
                        Inform your guests about their table seat on the ceremony and with whom they will share it.
                        Introduce your guests to each other in advance to make the ceremony more friendly. Who knows,
                        maybe next wedding you visit will be the couple from your ceremony.
                    </div>
                </div>
                <div className={s.block2_text4}>
                    <div className={s.titleText}>
                        ONLINE GUEST MANAGEMENT
                    </div>
                    <div className={s.text}>
                        You can manage your guests list using admin panel of the wedding page!
                        You don't need any notes, excel sheets or any other tools. Just use guest management
                        feature of the page: add, remove, filter, create views, add/remove attributes.
                        Do you want to know how many single men will be present on your ceremony?
                        Just create the fields "sex" and "marital status", assign the values correspondently,
                        and apply filter! It is really easy and useful.
                    </div>
                </div>

            </div>
            <div className={s.block3}>
                <div className={`${s.block3_title} ${c.titleCommon}`}>
                    Memory about your wedding. Delightful online photo and video album
                </div>
                <div className={s.block3_text1}>
                    <div className={s.titleText}>
                        MEMORY FOR AGES
                    </div>
                    <div className={s.text}>
                        All your pre-wedding, wedding, and after wedding photos, videos, wishes and funny moments will always be with you and your guests online.
                    </div>
                </div>
                <div className={s.block3_text2}>
                    <div className={s.titleText}>
                        DO NOT MISS ANY PHOTO OR VIDEO
                    </div>
                    <div className={s.text}>
                        Guests can share they emotions using free mobile app to upload photo and videos from their smartphones.
                        Your operator went to eat something. No problem! You will not miss anything thanks to the app and of cause friends.
                    </div>
                </div>
                <div className={s.block3_text3}>
                    <div className={s.titleText}>
                        GUESTS WISHES
                    </div>
                    <div className={s.text}>
                        Guests can leave the wishes any time using the web site or free mobile app. It can be as text message as video recordings.
                    </div>
                </div>
                <div className={s.block3_photo1}>
                    <div className={s.block3_photo1_img}>
                        <div className={s.photo_leftShadowElement}></div>
                    </div>
                </div>
                <div className={s.block3_photo2}>
                    <div className={s.block3_photo2_img}>
                        <div className={s.photo_leftShadowElement}></div>
                    </div>
                </div>
            </div>
            <div className={s.block4}>
                <div className={`${s.block4_title} ${c.titleCommon}`}>
                    All the information for your guests in one place online
                </div>
                <div className={s.block4_text1}>
                    <div className={s.titleText}>
                        EVERYTHING ABOUT THE COUPLE
                    </div>
                    <div className={s.text}>
                        Your guests and relatives definitely want to know as many details as possible about your couple and your love story.
                        All information about couple and history of their relationships with pre-wedding photos and love story video can be shared on site as well.
                    </div>
                </div>
                <div className={s.block4_text2}>
                    <div className={s.titleText}>
                        WEDDING DETAILS. SCHEDULE. HOW TO GET?
                    </div>
                    <div className={s.text}>
                        All the wedding details in one place online are available for your guests.
                        Schedule, how to get, bride's nephew name? Everything is there! Your guests will be prepared even for toasts.
                    </div>
                </div>
                <div className={s.block4_text3}>
                    <div className={s.titleText}>
                        PRESENCE ON THE CEREMONY
                    </div>
                    <div className={s.text}>
                        In case if some guests can't attend your wedding ceremony they can watch the photos and videos.
                        Moreover using the free app they can leave some text message, video recording or join you online to say some warm words.
                    </div>
                </div>
                <div className={s.block4_text4}>
                    <div className={s.titleText}>
                        ACQUAINTANCE WITH GUESTS
                    </div>
                    <div className={s.text}>
                        You can add info about your guests: photo, description, marital status, social media profiles. Guest will know where they sit and with whom they share the table.
                        Every wedding ceremony is first of all fun. If your guests will know each other before the ceremony - fun is guaranteed.
                    </div>
                </div>
                <div className={s.block4_text5}>
                    <div className={s.titleText}>
                        GIFTS WISH LIST
                    </div>
                    <div className={s.text}>
                        You can create the gifts wish list and guests can choose really necessary gifts.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;