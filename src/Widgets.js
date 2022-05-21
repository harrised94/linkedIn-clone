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
            {newsArticle("Cows lose their jobs as milk prices drop", 'Top news - 29 readers')}
            {newsArticle("Global population to double by 2040, babies to blame", '858 readers')}
            {newsArticle("Breathing oxygen linked to staying alive", '909999 readers')}
            {newsArticle("Voters to vote on whether to vote", '99 readers')}
            {newsArticle("Murderer says detective ruined his reputation", '9 readers')}
        </div>

    )
}

export default Widgets
