import { CoursePage } from './app.po';

describe('course App', () => {
  let page: CoursePage;

  beforeEach(() => {
    page = new CoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
