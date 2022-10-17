### 플러그인
플러그인이란 vue에 전역 수준의 기능을 추가할 때 사용한다.
- 플러그인을 사용하는 경우
  - app.component() 메서드를 사용하여 전역 컴포넌트를 등록 하고자 할 때
  - app.directive() 메서드를 사용하여 커스텀 디렉티브를 등록 하고자 할 때
  - app.provide()를 사용하여 앱 전체에 리소스(메서드 또는 데이터)를 주입할 때
  - 전역 애플리케이션 인스턴스에 속성 또는 메서드를 추가하고자 할 때 app.config.globalProperties에 연결하여 추가할 수 있음.
  - 위의 몇 가지 조합을 수행하는 라이브러리를 설치하고자 할 때 (vue-router)

- vue 라이프싸이클에서 플러그인은 setup(Composition API) 이후에 사용가능. 인스턴스 생성시 created methods에서 플러그인을 호출하고 싶다면 Composition API 가 아닌 Option API에서 해야함.

- Option API 로 사용할 때는 globalProperties로 연결해서 `this.$name.func()`형식으로 사용, Composition API로 사용할 때는 provide를 사용하여 inject로 불러오면 된다.