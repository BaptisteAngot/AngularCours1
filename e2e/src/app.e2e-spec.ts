import { AppPage } from './app.po';
import {browser, by ,element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual("Littleponey");
  });

  it('Fill username', function () {
    element(by.id('userName')).sendKeys('toto@toto.com');
    expect(element(by.id('userName')).getAttribute('value')).toBe('toto@toto.com');
    element(by.id('userName')).clear();
  });


  it('Connexion', function () {
    connection();
    expect(element(by.id('mailUsername')).getText()).toEqual('toto@toto.com');
    disconnected();
  });

  it('Deconnexion', function () {
    connection();
    disconnected();
    expect(element(by.id('userName')).getAttribute('value')).toBe('');
  });

  it('Test redirection to add-race', function () {
    connection();
    element(by.id('navbarDropdownRace')).click();
    element(by.id('add-races')).click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'add-race');
    disconnected();
  });

  it('Retour accueil', function () {
    goToHomePage();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
  });

  it('Redirection to add pony page', function () {
    connection();
    goToAddPonyPage();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'add-pony');
    disconnected();
  });

  it('Ajout d\'un poney', function () {
    connection();
    goToAddPonyPage();
    completeAddPonyForm();
    goToHomePage();
    //TODO Check if last element get id EtalonDuCul
  });

  function completeAddPonyForm() {
    element(by.id('name')).sendKeys('EtalonDuCul');
    element(by.id('couleur')).sendKeys('Orange');
    element(by.id('age')).sendKeys(12);
    element(by.id('addPonyForm')).click();
  }

  function goToHomePage() {
    element(by.id('accueil')).click();
  }
  function goToAddPonyPage() {
    element(by.id('navbarDropdown')).click();
    element(by.id('add-ponies')).click();
  }

  function connection() {
    element(by.id('userName')).sendKeys('toto@toto.com');
    element(by.id('connectButtn')).click();
  }

  function disconnected() {
    element(by.id('disconnected')).click();
  }

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
