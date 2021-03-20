import React from 'react'
import './tarif.css'

const Tarif = () => {
  return (
    <div>
      <div className="tarif">
        <div className="tarifTittle">Тарифы по работе с маркированными товарами</div>
        <div className="tittleList">
          <div className="listItems"> — Мониторинг выбытия маркированных товаров</div>
          <div className="listItems">
            — Проверка корректности каждого кода маркировки в чеках, полученных от ККТ пользователя
          </div>
          <div className="listItems"> — Отображение статуса передачи данных в ЦРПТ</div>
          <div className="listItems">— Получение выписки с чеками, содержащими коды маркировки</div>
          <div className="listItems">— Инструмент для проверки кода товара (тег 1162)</div>
          <div className="listItems">— Аналитика в разделе Бизнес</div>
        </div>
        <div className="tarifList">
          <div className="tarifListItem">
            <div className="tarifListTittle">Учёт марок. Выбытие товаров</div>
            <div className="tarifText">2000 руб. / 12 месяцев</div>
            <button type="button" className="tarifBtn">
              Подключить
            </button>
          </div>
          <div className="tarifListItem">
            <div className="tarifListTittle">Учёт марок. Выбытие товаров</div>
            <div className="tarifText">2000 руб. / 12 месяцев</div>
            <button type="button" className="tarifBtn">
              Подключить
            </button>
          </div>
          <div className="tarifListItem">
            <div className="tarifListTittle">Учёт марок. Выбытие товаров</div>
            <div className="tarifText">2000 руб. / 12 месяцев</div>
            <button type="button" className="tarifBtn">
              Подключить
            </button>
          </div>
          <div className="tarifListItem">
            <div className="tarifListTittle">Учёт марок. Выбытие товаров</div>
            <div className="tarifText">2000 руб. / 12 месяцев</div>
            <button type="button" className="tarifBtn">
              Подключить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarif
