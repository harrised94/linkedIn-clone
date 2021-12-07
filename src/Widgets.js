import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecord } from '@mui/icons-material';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Papa React is back", 'Top news - 9099 readers')}
            {newsArticle("Coronavirus: UK updates", '858 readers')}
            {newsArticle("Ed wins WSM", '909999 readers')}
            {newsArticle("Boris Johnson dresses up like prick", '099 readers')}
            {newsArticle("Omicron is back and ready to attack", '9 readers')}
        </div>

    )
}

export default Widgets
