# ksprsk.me

## 로컬 실행

| 명령어 | 용도 |
|-------|------|
| `make dev` | 로컬 개발 서버 실행. `_config_dev.yml`이 있으면 함께 적용하고, 저장 시 자동 새로고침. |
| `make preview` | 배포 설정에 가까운 로컬 서버 실행. `_config.yml`만 사용하고, 저장 시 자동 새로고침. |
| `make build` | 배포 설정으로 정적 파일만 빌드. 서버는 띄우지 않음. |
| `make build-dev` | 로컬 개발 설정까지 포함해서 정적 파일만 빌드. |
| `make clean` | Jekyll 빌드 결과와 캐시 정리. |

보통은:

```bash
make dev
```

WSL에서 띄우고 Windows 브라우저로 접속이 안 되면:

```bash
hostname -I
```

출력된 WSL IP로 `http://<WSL-IP>:4000`에 접속합니다.

## 글 작성

`_posts/YYYY-MM-DD-제목.md` 생성:

```markdown
---
layout: post
title: "글 제목"
categories: [note]
---

본문...
```

### 카테고리 옵션

| 카테고리 | 용도 | 서브카테고리 |
|---------|------|-------------|
| `[daily]` | 일상/짧은 글 | 없음 |
| `[note]` | 무작정 쓰는 글 | 가능 |
| `[note, 서브]` | 분류된 노트 | - |
| `[article]` | 정돈된 글 | 가능 |
| `[article, 서브]` | 분류된 아티클 | - |

### 수식

인라인 수식:

```markdown
함수 $f : X \to Y$를 생각하자.
```

블록 수식:

```markdown
$$
\ker f = \{ x \in X \mid f(x) = 0 \}
$$
```

Jekyll/Markdown 변환 과정에서 `\(...\)`의 백슬래시가 사라질 수 있어 `$...$`, `$$...$$`를 기본으로 씁니다.

---

## 서브카테고리 추가

포스트의 `categories`에 두 번째 값을 넣으면 자동으로 Note/Article 목록 안에 섹션이 생깁니다.

```markdown
---
layout: post
title: "글 제목"
categories: [note, math]
---
```

홈의 서브카테고리 링크는 `/categories/note/#math`처럼 목록 페이지 안에서 해당 섹션만 보이게 합니다.

---

## 페이지별 내용

| 페이지 | 내용 |
|-------|------|
| Home | About + Note/Article 개요 (Daily 제외) |
| Daily | Daily 글 목록 (제목만) |
| Note | 서브카테고리별 그룹 |
| Article | 서브카테고리별 그룹 |
| Archives | 날짜별 목록 (Daily 제외) |

---

## 사이드바 페이지 추가

```markdown
---
layout: page
title: 페이지명
sidebar: true
sidebar_order: N
---
```

현재 순서: Home(1) / Daily(2) / Note(3) / Article(4) / Archives(5)
