let initialState = {
    mainBlock: {
        mainBackgroundUrl: "../../img/header_background.jpg",
        mainTitle: "Your wedding site",
        mainMainText: "ALL YOUR WEDDING MOMENTS IN ONE PLACE",
        mainText: "Create your personal beautiful site in minutes. " +
            "Choose a design, add text, photos and videos. Share the link with your guests and relatives, acquaint them with each other. " +
            "Prepare for the celebration in advance. Your site will look equally nice on any gadget.",
        mainMainButtonText: "CREATE FUcking SITE",
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
    }

};

const SET_TEXT = "SET-TEXT";
const SET_EDIT_MODE = "SET-EDIT-MODE";

const landingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-TEXT":
            return {
                // ...state, mainTitle: action.newText
        ...state, mainBlock: {...state.mainBlock, mainTitle: action.newText}
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

export let setText = (newText) => ({type: "SET-TEXT", newText});
export let EditMode = () => ({type: "SET-EDIT-MODE", });

export const updateText = (newText) => {
    return (dispatch) => {
        dispatch(setText(newText));
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