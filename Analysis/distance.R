library(httr)
library(XML)
start<-"therivercafe"
end<-"도서관"
url<-paste("https://google.co.kr/search?q=",start,"%28뉴욕%29에서+",end,"%28뉴욕%29까지의+거리", sep="")
web<-GET(url)
help(paste)
html<-htmlTreeParse(web, useInternalNodes=T, trim=T, encoding='utf-8')
rootNode<-xmlRoot(html)
tag<-xpathSApply(rootNode, "//body/div[@id='main']/div[3]", xmlValue)
library(stringr)
mile <- str_trim(substr(tag, regexpr('\\(', tag)+1, regexpr('마일',tag)-1))
miles<-as.numeric(mile)
km<-miles*1.60934
km<-round(km, digit=2)
setwd("./Analysis")
write(km, file="distance.txt")
