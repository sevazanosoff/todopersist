import React from "react";
import { RequestErrorProps } from "../types/types";

import cl from '../styles/Error.module.scss'


const RequestError: React.FC<RequestErrorProps> = ({ error }) => {
    return <div className={cl['error']}>{error}</div>;
};
export default RequestError