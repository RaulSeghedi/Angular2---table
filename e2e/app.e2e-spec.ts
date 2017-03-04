import { Table9Page } from './app.po';

describe('table9 App', () => {
  let page: Table9Page;

  beforeEach(() => {
    page = new Table9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
