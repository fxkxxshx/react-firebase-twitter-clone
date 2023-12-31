import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon' />
        <input placeholder='キーワード検索' type="text" />
      </div>
      <div className='widgets--widgetContainer'>
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={'1697134118730166648'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="fxkxxshx"
          options={{height: 400}}
        />
        <TwitterShareButton
          url={'https://twitter.com/fxkxxshx'}
          options={{text: '#React.js勉強中', via: 'fxkxxshx'}}
        />
      </div>
    </div>
  )
}

export default Widgets
