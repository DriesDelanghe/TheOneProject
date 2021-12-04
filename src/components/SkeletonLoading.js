import * as React from 'react'

export const SkeletonLoading = ({ width, height, className, opacity, children }) => {


    return (
            <div className={"skeleton-box rounded-2 " + className}
                 style={{
                     width: `${width || "25px"}`,
                     height: `${height || "16px"}`,
                     backgroundColor: `rgba(238, 238, 238, ${opacity || 1})`
                 }}>
                {children}
            </div>
    )
}