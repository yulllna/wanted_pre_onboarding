# wanted_pre_onboarding
&nbsp;

## 과제 수행 후 소감

>평소 Vue.js를 즐겨 사용하는 터라 React.js 라이브러리는 원티드 프리온보딩 과제를 하며 처음 사용하게 되었습니다. 과제를 수행한 시일인 3일 내로 정해진 과제를 구현해야 하다보니 완벽하게 리액트 구문을 익힌 채로 수행하지 못해서 아쉬움이 남습니다.
>
>하지만 늘 미뤄둔 과제같았던 리액트 구문을 단기간에  경험할 수 있어 의미있는 시간이었고 뷰에 비해 상대적으로 자유로운 리액트의 특성에 큰 매력을 느꼈습니다. 
>
>그리고 프로그래밍 실력은 확실히 맨땅에 헤딩 식으로 배워야 빨리 습득한다는 것도 다시금 깨닫게 되었습니다 :D

&nbsp;

## 컴포넌트 구현 방법

:herb:각 컴포넌트의 CSS코드를 style.css라는 통합 파일을 만들어 컴포넌트에 import해주는 형식으로 구현했습니다.

&nbsp;
### Toggle.js
---
#### :deciduous_tree:핵심요소 구현　
각 버튼에 **onClick 이벤트**를 설정해 데이터를 변경해주었습니다. 변경한 데이터는 각 버튼의 **className**을 이용하여 클래스로 CSS 스타일링을 컨트롤 했습니다.
&nbsp;
#### :deciduous_tree:부가요소 구현　
슬라이드 애니메이션은 **CSS 스타일링**에서 구현했습니다. 시멘틱한 태그사용을 위해 버튼 하나에 **::before 가상 선택자**를 사용한 하얀 슬라이드 영역을 생성해주고 position과 transition을 이용해 클릭 시 움직이는 슬라이드를 구현했습니다.
&nbsp;

### Tab.js
---
#### :deciduous_tree:핵심요소 구현　
Toggle.js와 동일한 방식으로 구현했습니다. **클릭 이벤트**를 사용해 각 탭을 클릭 시에 인덱스를 부여해 해당 인덱스와 동일한 데이터 값을 불러오는 형식으로 구현했습니다.
&nbsp;
#### :deciduous_tree:부가요소 구현　
슬라이드 애니메이션 역시 Toggle.js와 동일한 방식입니다. 다만 탭 바를 가상 선택자로 만들 경우 CSS 선택자가 지정하기 애매한 부분이 있어 Toggle.js와 달리 div 태그를 사용했습니다.  
&nbsp;

### Slider.js
---
#### :deciduous_tree:핵심요소 구현　
값이 표시되는 영역은 **리액트 훅**을 이용하여 input(슬라이더)의 value 데이터를 받아와 표시해주는 형식으로 구현했습니다. 
&nbsp;
#### :deciduous_tree:부가요소 구현　
하단 버튼을 누르면 **onClick 이벤트**가 발생해 각 버튼에 설정된 값을 슬라이더의 value와 연결해줬습니다. 해당 input(슬라이더) 태그의 CSS 커스텀으로 인해 슬라이더 바의 컬러링은 아쉽게도 구현하지 못했습니다.. :pensive:  
&nbsp;

### Input.js
---
#### :deciduous_tree:핵심요소 구현　
input태그를 이용해 이메일과 비밀번호 입력을 가능하게 생성했습니다.
&nbsp;
#### :deciduous_tree:부가요소 구현　
1. email input창에 **onBlur 이벤트**를 생성해서 이메일 입력 후 입력창을 벗어나게 되면 인풋에 입력한 값을 체크하는 형식으로 구현했습니다. 이를 위해 **이메일 형식을 체크하는 정규식**을 사용해주었고 입력값이 이메일이 아니라면 메세지 에러를 표시했습니다.
아이콘은 **폰트어썸**을 이용해 삽입했고 이메일 형식에 맞을 때와 아닐 때를 **className**으로 구분해서 CSS를 적용해줬습니다.
&nbsp;　
2. 아이콘을 클릭시에 **onClick 이벤트**를 발생시켜서 **input type을 변경**시키는 형식으로 수행했습니다.
&nbsp; 

### Dropdown.js
---
#### :deciduous_tree:핵심요소 구현　
스타일링 때문에 select태그를 사용하지 않았습니다. 기능을 하나하나 구현하니 제일 신선하고 어려웠던:sob: 과제였습니다.
드롭다운 선택값을 나타내는 창과 하단 option들이 나열되는 창을 따로 만들었습니다. 상단창을 눌렀을 때 **체크박스의 체크 여부**로 드롭박스가 열리게 되는 형식으로 구현했습니다. 하단창의 옵션들은 선택 시 **리액트 훅**에서 받아와 Selected라는 값에 추가하여 상단창에 나타냈습니다.
&nbsp;
#### :deciduous_tree:부가요소 구현　
키워드 필터는 노력했으나 아쉽게도 구현하지 못했습니다... input에 입력된 값을 받아와 필터 후에 원래 리스트가 아닌 필터된 리스트를 구현하는 방법에서 고민하다가 제출합니다..
