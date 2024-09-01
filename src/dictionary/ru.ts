const ruLocale: { [key: string]: string } = {
  //app
  'common.name': 'KUDA',
  'common.email': 'Электронная почта',
  'common.back': 'Назад',
  'common.yes': 'Да',
  'common.no': 'Нет',
  'common.unnecessary': 'Не важно',
  'common.finish': 'Завершить',

  //auth page
  'auth.page.login': 'Войти',
  'auth.page.register': 'Зарегистрироваться',

  //login page
  'login.page.login': 'Войти',
  'login.page.back': ' Назад',
  'login.page.username': 'Логин',
  'login.page.password': 'Пароль',
  'login.page.restore': 'Восстановить',
  'login.page.forgot': 'Забыли пароль? Не беда!',
  'login.page.error.login': 'Неправильно введен логин или пароль',
  'login.page.error.inputEmpty': 'Данные поля не могут быть пустыми',

  //restore page
  'restore.page.restore': 'Восстановить',

  //passwrod page
  'password.page.password': 'Новый пароль',
  'password.page.checkpassword': 'Повторите новый пароль',
  'password.page.save': 'Сохранить',

  //register page
  'register.page.username': 'Никнейм',
  'register.page.email': 'Электронная почта',
  'register.page.password': 'Пароль',
  'register.page.checkpassword': 'Пароль еще раз',
  'register.page.confirm': 'Зарегистрироваться',
  'register.page.error.login': 'Пользователь с таким логином уже есть в kuda',
  'register.page.error.email': 'Пользователь с такой почтой уже есть в kuda',
  'register.page.error.password': 'Пароль должен содержать в себе верхний и нижний регистры, латинские символы и цифры',
  'register.page.error.checkPassword': 'Введенные пароли не совпадают',
  'register.page.error.inputEmpty': 'Данные поля не могут быть пустыми',

  //confirm page
  'confirm.page.title': 'Проверьте почту',
  'confirm.page.registrationInfo': 'Мы прислали вам письмо для подтверждения регистрации.',
  'confirm.page.changePassInfo': 'Мы прислали вам письмо для подтверждения смены пароля.',
  'confirm.page.restorePassInfo': 'Мы прислали вам письмо для восстановления профиля.',
  'confirm.page.resend': 'Если вы не получили письмо, мы можем отправить вам его ещё раз через:',
  'confirm.page.link': 'Отправить повторно',

  //main page
  'main.page.match': 'МЭТЧ',
  'main.page.match.info': 'Решить, куда пойдете вместе',
  'main.page.solo': 'СОЛО',
  'main.page.solo.info': 'Сегодня я провожу время с собой',
  'main.page.favorites': 'ИЗБРАННОЕ',
  'main.page.favorites.info': 'Любимые заведения',

  //profile page
  'profile.page.password': 'Поменять пароль',
  'profile.page.favorites': 'Избранное',
  'profile.page.edit': 'Редактировать профиль',
  'profile.page.blackList': 'Черный список',
  'profile.page.changeThemeDark': 'Темная тема',
  'profile.page.changeThemeLight': 'Светлая тема',
  'profile.page.error.username': 'Данный логин уже кем-то занят',
  'profile.page.error.email': 'Данная почта уже кем-то занята',
  'profile.page.error.inputEmpty': 'Данные поля не могут быть пустыми',
  'profile.page.logout': 'Выйти из профиля',

  //favorites page
  'favorites.page.edit': 'Редактировать избранное',
  'favorites.page.edit.end': 'Закончить редактирование',

  //favorites page
  'blackList.page.edit': 'Редактировать ЧС',
  'blackList.page.edit.end': 'Закончить редактирование',

  //company page
  'company.page.blackList.in': 'В черный список',
  'company.page.blackList.out': 'Убрать из черного списка',

  //filter page
  'filter.page.lobbyName': 'Название комнаты',
  'filter.page.metroFilter': 'Метро',
  'filter.page.metroName': 'Введите станцию...',
  'filter.page.kitchenFilter': 'Кухня',
  'filter.page.priceFilter': 'Средний чек',
  'filter.page.alcohol': 'Алкоголь',
  'filter.page.coffee': 'Кофе',
  'filter.page.hookah': 'Кальян',
  'filter.page.search': 'Подобрать!',

  //match page
  'match.page.title': 'Режим мэтча',
  'match.page.create': 'Создать комнату',
  'match.page.join': 'Присоединиться',

  //game page
  'game.page.noCompanies.title': 'К сожалению, таких заведений нет',
  'game.page.gameFinished.title': 'Больше заведений нет',
  'game.page.noCompanies.body': 'Заведений, которые соответствовали бы всем выбранным фильтрам, нет.',
  'game.page.gameFinished.body': 'Заведений, которые соответствовали бы выбранным фильтрам, больше нет.',
  'game.page.noCompanies.floor': 'Может, попробовать по-другому?',
  'game.page.backToFilters': 'Назад к фильтрам',
  'game.page.wait': 'Дождитесь пока остальные участники закончат свой выбор',

  //win page
  'win.page.openCompany': 'Перейти к заведению',
  'win.page.finish': 'Завершить',
  'win.page.restart': 'Начать заново',

  //join page
  'join.page.lobbyKey': 'Код комнаты',
  'join.page.join': 'Присоединиться',
  'join.page.error.noLobby': 'По данному коду не найдено комнаты, попробуйте другой',
  'join.page.error.overflow': 'Судя по всему, комната переполнена',
  'join.page.error.unknown': 'Произошла неизвестная ошибка, попробуйте зайти позже',

  //lobby page
  'lobby.page.copy.key': 'Пригласительный код скопирован',
  'lobby.page.share.link': 'Пригласительная ссылка отправлена',
  'lobby.page.share': 'Поделиться',
  'lobby.page.start': 'Старт',
  'lobby.page.share.title': 'Пригласительная ссылка в комнату',
  'lobby.page.share.description': 'По этой ссылке другие пользователи смогу присоединиться к вашей комнате',
  'lobby.page.settings': 'Настройки',
  'lobby.page.metro': 'Метро',
  'lobby.page.kitchens': 'Кухня',
  'lobby.page.noChoise': 'Не выбрано',

  'rating.page.swipes': 'свайпов',

  //modal windows
  'window.cookie.title': 'Мы используем cookie',
  'window.cookie.info': 'Продолжая использовать этот сайт, вы соглашаетесь с использованием cookie-файлов',
  'window.cookie.accept': 'Согласие',
  'window.cookie.decline': 'Отказ',

  'window.profile.edit': 'Редактирование профиля',
  'window.profile.avatar': 'Выберите изображение',
  'window.profile.accept': 'Готово',
  'window.profile.decline': 'Отмена',

  'window.share.close': 'Закрыть',
  'window.share.title': 'Поделиться ссылкой',
}

export default ruLocale
