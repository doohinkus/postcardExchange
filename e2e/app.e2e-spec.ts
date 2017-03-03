import { PostcardExchangePage } from './app.po';

describe('postcard-exchange App', function() {
  let page: PostcardExchangePage;

  beforeEach(() => {
    page = new PostcardExchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
