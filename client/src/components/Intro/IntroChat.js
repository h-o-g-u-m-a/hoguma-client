import React from 'react';
import Disqus from 'disqus-react';

function IntroChat() {
  const disqusShortname = 'hoguma';
  const disqusConfig = {
    url:
      'http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/about',
    identifier: 'article-id',
    title: '하이킥 완전정복',
  };
  return (
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        alignItems: 'center',
        maxHeight: '40vh',
        overflowY: 'auto',
      }}
    >
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}

export default IntroChat;
