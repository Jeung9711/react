import requests
from bs4 import BeautifulSoup

URL = "https://www.starbucks.co.kr/menu/season_list.do"
response = requests.get(URL)
soup = BeautifulSoup(response.text, "html.parser")

print(soup.title.text)  # 웹페이지 제목 출력
