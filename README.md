# 📚 NextJS Study

노마드코더의 [NextJS 시작하기](https://nomadcoders.co/nextjs-fundamentals/) 강의를 들으며 공부합니다 🫡

---

## 프레임워크(framework) vs 라이브러리(library)
이 둘의 큰 차이는 <span style="color:red">통제의 역전(Inversion of Control)</span> 이다. <br>
라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있다. <br>
그러나 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출한다. <br>

**라이브러리** 👉🏻 사용자가 파일 이름이나 구조 등을 정하고 모든 결정을 내림 <br>
**프레임워크** 👉🏻 파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름 <br>
<br>

## pages
Next.js 는 폴더 안에 있는 파일명에 따라 route가 결정된다. <br>
따라서 react-router를 설치해줄 필요가 없다.<br>
다만 예외사항으로 `index.js`경우에는 라우터가 `"/"` 로 결정된다. <br>

## CSR vs SSR
### CSR(Client Side Rendering)
브라우저가 자바스크립트를 가져와서 client-side 자바스크립트가 모든 UI를 만드는 것
브라우저가 HTML을 가져올 때 빈 div를 가져온 후에 브라우저가 모든 자바스크립트를 요청해서 자바스크립트와 react.js를 실행시켜야 화면에서 UI가 보인다.

### SSR(Server Side Rendering)
HTML이 미리 랜더링 된다.
유저가 웹사이트에 가면 초기 상태의 컴포넌트로 미리 생성된 HTML 페이지를 보게 된다. (페이지의 초기 로딩 지연을 줄일 수 있다.)
SEO(검색 엔진)에 좋다.