let initialState = {
        mainBlock: {
            mainBackgroundUrl: "../../img/header_background.jpg",
            mainTitle: "Your wedding site",
            mainMainText: "ALL YOUR WEDDING MOMENTS IN ONE PLACE",
            mainText: "Create your personal beautiful site in minutes. " +
                "Choose a design, add text, photos and videos. Share the link with your guests and relatives, acquaint them with each other. " +
                "Prepare for the celebration in advance. Your site will look equally nice on any gadget.",
            mainMainButtonText: "CREATE SITE",
            mainSecondaryButtonText: "CHOOSE DESIGN"
        },
        editMode: true,
        features: {
            title: "What will you get",
            block1: {
                title: "",
                photo1uri: "",
                photo2uri: "",
                textBlock1: {
                    title: "",
                    text: ""
                },
                textBlock2: {
                    title: "",
                    text: ""
                },
                textBlock3: {
                    title: "",
                    text: ""
                },
                textBlock4: {
                    title: "",
                    text: ""
                },

            }
        },
        howItWorks: {
            title: "How it works",
            block1: {
                number: "1",
                title: "SIGN UP",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
                    "                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            block2: {
                number: "2",
                title: "CHOOSE A DESIGN",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
                    "                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            block3: {
                number: "3",
                title: "PICK A PLAN",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
                    "                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            block4: {
                number: "4",
                title: "CUSTOMIZE SITE",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
                    "                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            block5: {
                number: "5",
                title: "SHARE",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
                    "                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        },
        prices: {
            title: "Prices",
            rates: [
                {
                    name: "rate1",
                    title: "Gold",
                    price: "69",
                    currency: "$",
                    period: "/ Y R",
                    description: "Good site",
                    features: [
                        "About us",
                        "Wedding ceremony schedule, how to get there?",
                        "Pre-wedding gallery: 50 photos and videos",
                        "Wedding gallery: 50 photos and videos",
                        "Our story, Love Story video",
                        "Guest and relatives list",
                        "Online guests and relatives management",
                        "Confirmation form (RSVP)",
                        "Online greetings form",
                        "Guests’ seating plan",
                        "Gifts list",
                        "Mobile application",
                        "Photos and videos synchronization from mobile app"
                    ]
                },
                {
                    name: "rate2",
                    title: "Diamond",
                    price: "150",
                    currency: "$",
                    period: "/ Y R",
                    description: "Good site",
                    features:
                        [
                            "About us",
                            "Wedding ceremony schedule, how to get there?",
                            "Pre-wedding gallery: 50 photos and videos",
                            "Wedding gallery: 50 photos and videos",
                            "Our story, Love Story video",
                            "Guest and relatives list",
                            "Online guests and relatives management",
                            "Confirmation form (RSVP)",
                            "Online greetings form",
                            "Guests’ seating plan",
                            "Gifts list",
                            "Mobile application",
                            "Photos and videos synchronization from mobile app"

                        ]
                }
                ,

                {
                    name: "rate3",
                    title: "Free",
                    price: "0",
                    currency: "$",
                    period: "/ Y R",
                    description: "Good site",
                    features:
                        [
                            "About us",
                            "Wedding ceremony schedule, how to get there?",
                            "Pre-wedding gallery: 50 photos and videos",
                            "Wedding gallery: 50 photos and videos",
                            "Our story, Love Story video",
                            "Guest and relatives list",
                            "Online guests and relatives management",
                            "Confirmation form (RSVP)",
                            "Online greetings form",
                            "Guests’ seating plan",
                            "Gifts list",
                            "Mobile application",
                            "Photos and videos synchronization from mobile app"

                        ]
                }
            ]

        },
        certificate: {
            title: "Gift certificates ",
            text: "Gift certificate for personal wedding page is the original gift on wedding, bachelor/bachelorette party, wedding anniversary or even birthday. Present your friends personal wedding site that can be in future became family site and will save all remarkable moments of their life. Certificate will be sent to your e-mail or we can send it to you in gift wrap.",
            buttonText: "BUY A GIFT CERTIFICATE"
        },
        reviews: {
            title: "What our customers say about us ",
            buttonText: "Leave feedback",
            reviews: [
                {
                    id: "review1",
                    name: "Sophy",
                    text: "Thanks to my sister for such a great gift! I even didn't know that you can create personal wedding page!",
                    photo: "./img/photo1.jpg"
                },
                {
                    id: "review2",
                    name: "John",
                    text: "Super! Even those friends who could not visit our wedding were with us in chat and online saw what happened!",
                    photo: "./img/photo2.jpg"
                },
                {
                    id: "review3",
                    name: "Sergiy@Alina",
                    text: "Wedding is the top event of all our life! Unfortunately many fun moments are forgotten over time… " +
                        "But thanks to our wedding site we can always view the photos and videos together with whole family and remember this day!",
                    photo: "./img/photo3.jpg"
                },
                {
                    id: "review4",
                    name: "Annie",
                    text: "My wedding is the best! No one else had his own wedding site :)",
                    photo: "./img/photo4.jpg"
                },
                {
                    id: "review5",
                    name: "Annie",
                    text: "My wedding is the best! No one else had his own wedding site :)",
                    photo: "./img/photo5.jpg"
                },
                {
                    id: "review6",
                    name: "Annie",
                    text: "My wedding is the best! No one else had his own wedding site :)",
                    photo: "./img/photo6.jpg"
                }
            ]
        }

    }
;

const SET_TEXT = "SET-TEXT";
const SET_EDIT_MODE = "SET-EDIT-MODE";

const landingReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case "mainBackgroundUrl":
            return {
                ...state, mainBlock: {...state.mainBlock, mainBackgroundUrl: action.newText}
            }
        case "mainTitle":
            return {
                ...state, mainBlock: {...state.mainBlock, mainTitle: action.newText}
            }
        case "mainMainText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainMainText: action.newText}
            }
        case "mainText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainText: action.newText}
            }
        case "mainMainButtonText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainMainButtonText: action.newText}
            }
        case "mainSecondaryButtonText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainSecondaryButtonText: action.newText}
            }
        case SET_EDIT_MODE:
            return {
                // ...state, mainTitle: action.newText
                ...state,
                editMode: true
            }
        // case "UPDATE-NEW-MESSAGE":
        //     return {
        //         ...state,
        //         newMessageText: action.newMessage
        //     }
        default:
            return state;
    }
};


export let setText = (newText, blockName) => ({type: blockName, newText});
export let EditMode = () => ({type: "SET-EDIT-MODE",});

export const updateText = (newText, blockName) => {
    debugger
    return (dispatch) => {
        dispatch(setText(newText, blockName));
    }

}

export const setEditMode = () => {
    return (dispatch) => {
        dispatch(EditMode());
    }
}

export let addMessageActiveCreation = (newMessageText) => ({type: "ADD-MESSAGE", newMessageText});
// export let updateNewMessageActiveCreation = (text) => ({type: "UPDATE-NEW-MESSAGE", newMessage: text});

export default landingReducer;