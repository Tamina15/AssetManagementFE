import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type FunctionalIconModel = {
    icon: IconDefinition;
    style: Object;
    onClickfunction: (...data: any ) => void;
}
