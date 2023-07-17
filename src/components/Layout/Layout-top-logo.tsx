import {ReactNode} from "react";

export const LayoutTopLogoMainBanner = ({children} : {children: ReactNode}) => {
    return (
        <div className="layoutTopLogo">
            {children}
        </div>
    )
}