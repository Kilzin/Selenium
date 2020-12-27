using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace PTUIA_MG
{
    [TestFixture]
    public class Tests
    {
        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;
        private bool acceptNextAlert = true;

        [SetUp]
        public void SetupTest()
        {
            driver = new ChromeDriver() ;
            baseURL = "https://www.google.com/";
            verificationErrors = new StringBuilder();
        }

        [TearDown]
        public void TeardownTest()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception)
            {
                // Ignore errors if unable to close the browser
            }
            Assert.AreEqual("", verificationErrors.ToString());
        }

        [Test]
        public void The1Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("imie")).Click();
            driver.FindElement(By.Id("dataU")).Click();
            driver.FindElement(By.Id("dataU")).Click();
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-2008");
            driver.FindElement(By.XPath("//form[@id='formma']/div[4]/div/div/label")).Click();
            driver.FindElement(By.Id("lekarz")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 406674160317 data 315569260000lata 12.887001741456059", CloseAlertAndGetItsText());
            Assert.AreEqual("Mlodzik", CloseAlertAndGetItsText());
        }
        [Test]
        public void The2Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Click();
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 722207045161 data 315569260000lata 22.885849057699726", CloseAlertAndGetItsText());
            Assert.AreEqual("Dorosly", CloseAlertAndGetItsText());
        }

        [Test]
        public void The3Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-2008");
            driver.FindElement(By.XPath("//form[@id='formma']/div[4]/div/div/label")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 406674289860 data 315569260000lata 12.887005846513693", CloseAlertAndGetItsText());
            Assert.AreEqual("Blad danych", CloseAlertAndGetItsText());
        }

        [Test]
        public void The4Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.Id("rodzice")).Click();
            driver.FindElement(By.XPath("//form[@id='formma']/div[5]/div/div/label")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 722207135220 data 315569260000lata 22.88585191155818", CloseAlertAndGetItsText());
            Assert.AreEqual("Dorosly", CloseAlertAndGetItsText());
        }

        [Test]
        public void The5Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Click();
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-2008");
            driver.FindElement(By.XPath("//form[@id='formma']/div[5]/div/div/label")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 406674372192 data 315569260000lata 12.887008455513062", CloseAlertAndGetItsText());
            Assert.AreEqual("Blad danych", CloseAlertAndGetItsText());
        }

        [Test]
        public void The6Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputPassword3")).Click();
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("First name must be filled out", CloseAlertAndGetItsText());
        }

        [Test]
        public void The7Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał2137");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 722207247194 data 315569260000lata 22.88585545987591", CloseAlertAndGetItsText());
            Assert.AreEqual("Dorosly", CloseAlertAndGetItsText());
        }

        [Test]
        public void The8Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Nazwisko musi byc wypelnione", CloseAlertAndGetItsText());
        }

        [Test]
        public void The9Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski2137");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 722207312822 data 315569260000lata 22.88585753954615", CloseAlertAndGetItsText());
            Assert.AreEqual("Dorosly", CloseAlertAndGetItsText());
        }

        [Test]
        public void The10Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał%");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 722207345633 data 315569260000lata 22.885858579286207", CloseAlertAndGetItsText());
            Assert.AreEqual("Dorosly", CloseAlertAndGetItsText());
        }

        [Test]
        public void The11Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski%");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1998");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 722207374152 data 315569260000lata 22.885859483018088", CloseAlertAndGetItsText());
            Assert.AreEqual("Dorosly", CloseAlertAndGetItsText());
        }

        [Test]
        public void The12Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("jdshgjdg");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: NaN data 315569260000lata NaN", CloseAlertAndGetItsText());
            Assert.AreEqual("Blad danych", CloseAlertAndGetItsText());
        }

        [Test]
        public void The13Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.XPath("//div/div/div/div")).Click();
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1953");
            driver.FindElement(By.XPath("//form[@id='formma']/div[4]/div/div/label")).Click();
            driver.FindElement(By.XPath("//form[@id='formma']/div[5]/div/div/label")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 2142277839086 data 315569260000lata 67.88613818361142", CloseAlertAndGetItsText());
            Assert.AreEqual("Senior", CloseAlertAndGetItsText());
        }

        [Test]
        public void The14Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1953");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 2142277865776 data 315569260000lata 67.88613902938455", CloseAlertAndGetItsText());
            Assert.AreEqual("Blad danych", CloseAlertAndGetItsText());
        }

        [Test]
        public void The15Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1337");
            driver.FindElement(By.XPath("//form[@id='formma']/div[5]/div/div/label")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 21581328934392 data 315569260000lata 683.8856526897455", CloseAlertAndGetItsText());
            Assert.AreEqual("Senior", CloseAlertAndGetItsText());
        }

        [Test]
        public void The16Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-1953");
            driver.FindElement(By.XPath("//form[@id='formma']/div[5]/div/div/label")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 2142277927413 data 315569260000lata 67.88614098258493", CloseAlertAndGetItsText());
            Assert.AreEqual("Senior", CloseAlertAndGetItsText());
        }

        [Test]
        public void The17Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Click();
            // ERROR: Caught exception [ERROR: Unsupported command [doubleClick | id=inputEmail3 | ]]
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-2019");
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: 59519560820 data 315569260000lata 1.8861013528377257", CloseAlertAndGetItsText());
            Assert.AreEqual("Brak kwalifikacji", CloseAlertAndGetItsText());
        }

        [Test]
        public void The18Test()
        {
            driver.Navigate().GoToUrl("https://lamp.ii.us.edu.pl/~mtdyd/zawody/");
            driver.FindElement(By.Id("inputEmail3")).Click();
            driver.FindElement(By.Id("inputEmail3")).Clear();
            driver.FindElement(By.Id("inputEmail3")).SendKeys("Michał");
            driver.FindElement(By.Id("inputPassword3")).Clear();
            driver.FindElement(By.Id("inputPassword3")).SendKeys("Gutowski");
            driver.FindElement(By.Id("dataU")).Clear();
            driver.FindElement(By.Id("dataU")).SendKeys("08-01-2137");
            driver.FindElement(By.XPath("//div/div/div")).Click();
            driver.FindElement(By.XPath("//button[@type='button']")).Click();
            Assert.AreEqual("Roznica: -3664234010785 data 315569260000lata -116.11504906355582", CloseAlertAndGetItsText());
            Assert.AreEqual("Brak kwalifikacji", CloseAlertAndGetItsText());
        }



        private bool IsElementPresent(By by)
        {
            try
            {
                driver.FindElement(by);
                return true;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }

        private bool IsAlertPresent()
        {
            try
            {
                driver.SwitchTo().Alert();
                return true;
            }
            catch (NoAlertPresentException)
            {
                return false;
            }
        }

        private string CloseAlertAndGetItsText()
        {
            try
            {
                IAlert alert = driver.SwitchTo().Alert();
                string alertText = alert.Text;
                if (acceptNextAlert)
                {
                    alert.Accept();
                }
                else
                {
                    alert.Dismiss();
                }
                return alertText;
            }
            finally
            {
                acceptNextAlert = true;
            }
        }
    }
}
