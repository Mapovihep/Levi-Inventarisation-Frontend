import React from 'react'
import './emptyListKit.css'

export const EmptyListKit: React.FC = () => {
    return(
        <React.Fragment>
            <div className="upperBlock__EmptyListKit">
                <div className="whiteCircle__EmptyListKit"></div>
                <div className="whiteCircle__EmptyListKit"></div>
                <div className="whiteCircle__EmptyListKit"></div>
            </div>
            <div className="bottomBlock__EmptyListKit">
                <div className="grayRectangle__EmptyListKit left"></div>
                <div className="grayRectangle__EmptyListKit center"></div>
                <div className="grayRectangle__EmptyListKit right"></div>
            </div>
            <div className="bottomBlock__EmptyListKit">
                <div className="grayRectangle__EmptyListKit left"></div>
                <div className="grayRectangle__EmptyListKit center"></div>
                <div className="grayRectangle__EmptyListKit right"></div>
            </div>
            <button className="addButtonWithX"></button>
            <h2 className="title__EmptyListKit">You don't have setups</h2>
            <p className="message__EmptyListKit">Add setup and select items for it</p>
        </React.Fragment>
    )
}