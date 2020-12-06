library(httr)
library(XML)
url<-"https://www.google.co.kr/search?q=therivercafe%28%EB%89%B4%EC%9A%95%29%EC%97%90%EC%84%9C+%EB%8F%84%EC%84%9C%EA%B4%80%28%EB%89%B4%EC%9A%95%29%EA%B9%8C%EC%A7%80%EC%9D%98+%EA%B1%B0%EB%A6%AC"
web<-GET(url)
html<-htmlTreeParse(web, useInternalNodes=T, trim=T, encoding='utf-8')
rootNode<-xmlRoot(html)
tag<-xpathSApply(rootNode, "//body/div[@id='main']/div[3]", xmlValue)
library(stringr)
mile <- str_trim(substr(tag, regexpr('\\(', tag)+1, regexpr('마일',tag)-1))
miles<-as.numeric(mile)
km<-miles*1.60934
setwd("./Analysis")
write(km, file="distance.txt")
