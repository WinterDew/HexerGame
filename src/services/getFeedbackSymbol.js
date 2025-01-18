import { faAngleUp, faAnglesUp, faCheck, faAngleDown, faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function getFeedbackSymbol(val){
    switch (val) {
        case 2:
            return faAnglesUp;
            break;
        case 1:
            return faAngleUp;
            break;
        case 0:
            return faCheck;
            break;
        case -1:
            return faAngleDown;
            break;
        case -2:
            return faAnglesDown;
            break;
        default:
            break;
    }
}