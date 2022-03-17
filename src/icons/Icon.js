import React, {memo} from "react";
import IcoMoon from "react-icomoon";
const iconSet = require('./selection.json');

export const Icon = memo((props) => {
    return <IcoMoon iconSet={iconSet} {...props}/>
})