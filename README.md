# Игры разума (Brain Games)

[![Actions Status](https://github.com/dreamikez/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/dreamikez/fullstack-javascript-project-44/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dreamikez-organization_dreamikez&metric=alert_status&token=043a7366b4d96de7cf63f668c4f34ba6fd4751fa)](https://sonarcloud.io/summary/new_code?id=dreamikez-organization_dreamikez)

---

## 📝 Описание

**«Игры разума»** - это набор из пяти консольных мини-игр для тренировки математического мышления. Проект создан в рамках обучения на платформе [Хекслет](https://hexlet.io) и реализован на JavaScript с использованием Node.js.

Каждая игра задаёт пользователю по три вопроса. Чтобы одержать победу, необходимо ответить правильно на все три. Ошибка завершает игру и предлагает попробовать снова.

### 🎮 Доступные игры:

| Игра | Описание |
|------|----------|
| `brain-even` | Определение чётности числа |
| `brain-calc` | Вычисление математических выражений |
| `brain-gcd` | Нахождение наибольшего общего делителя |
| `brain-progression` | Поиск пропущенного числа в прогрессии |
| `brain-prime` | Проверка, является ли число простым |

---

## ⚙️ Минимальные требования

- **Node.js** версии 18 и выше
- **ОС:** Linux, macOS или Windows (WSL)

---

## 🚀 Установка и запуск

```bash
# Клонируем репозиторий
git clone https://github.com/dreamikez/fullstack-javascript-project-44.git

# Переходим в директорию проекта
cd fullstack-javascript-project-44

# Устанавливаем зависимости
make install

# Устанавливаем пакет глобально
npm link
```

**После установки любую игру можно запустить по названию**:

```bash
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

### Демонстрация работы brain-even:
Суть игры: пользователю показывается случайное число. Нужно ответить `yes`, если число чётное, и `no` - если нечётное.

[![asciicast](https://asciinema.org/a/PbrQ8jeav2c3THmc.png)](https://asciinema.org/a/PbrQ8jeav2c3THmc)

### Демострация работы brain-calc:
Суть игры: пользователю показывается случайное математическое выражение (сложение, вычитание или умножение). Нужно вычислить результат и записать ответ.

[![asciicast](https://asciinema.org/a/cUvkNTwCZzmKEnUW.png)](https://asciinema.org/a/cUvkNTwCZzmKEnUW)


### Демострация работы brain-gcd:
Суть игры: пользователю показывается два случайных числа. Нужно найти и ввести наибольший общий делитель этих чисел.

[![asciicast](https://asciinema.org/a/qqVwm9ROgIlciB58.png)](https://asciinema.org/a/qqVwm9ROgIlciB58)


### Демострация работы brain-progression:
Суть игры: пользователю показывается арифметическая прогрессия с одним пропущенным числом (заменено на ..). Нужно определить и ввести это число.

[![asciicast](https://asciinema.org/a/1818MHyj0BV7HBw2.png)](https://asciinema.org/a/1818MHyj0BV7HBw2)


### Демострация работы brain-prime:

Суть игры: пользователю показывается случайное число. Нужно ответить `yes`, если число простое, и `no` - если составное.

[![asciicast](https://asciinema.org/a/FeWQae8Xro8mr9I9.png)](https://asciinema.org/a/FeWQae8Xro8mr9I9)
