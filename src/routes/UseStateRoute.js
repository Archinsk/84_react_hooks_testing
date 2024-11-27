import Parent from "../components/Parent.js";

function UseStateRoute() {
  return (
    <div>
      <div>UseStateRoute</div>
      <code>const [state, setState] = useState(initialState);</code>
      <p>
        initialState принимает любое значение. Если передана функция, то она
        должна быть "чистой", без аргументов и должна возвращать значение любого
        типа. Вызывается один раз при первичной отрисовке компонента. Если в
        initialState передан результат вычисления функции, то он пересчитывается
        и при обновлении состояния. Чтобы вычисления производились только один
        раз в initialSate нужно передавать колбэк-функцию
      </p>
      <p>state - текущее значение.</p>
      <p>
        setState - функция обновления состояния, вызывающая перерисовку. Можно
        передать следующее значение напрямую или в виде функции, вычисляющей
        новое значение из предыдущего. При этом функция должна быть "чистой",
        принимающей единственный аргумент и возвращающей следующее значение. При
        обновлении состояния React ставит выполнение функции в очередь. До
        перерисовки компонента React выполнит все функции из очереди. Если
        проверить значение сразу после setState, то будет выведено предыдущее
        значение, новое значение state примет только при следующем рендеринге
        (может использоваться для сравнения предыдущего и последующего
        значений). При обновлении тем же значением компонент не
        перерисовывается. Если функция setState вызывается во время рендеринга,
        то React немедленно будет перерисовывать компонент с новым значением.
        Последовательные вызовы setState в одном слушателе событий не вызовут
        последовательных перерисовок, реакт пакетно выполнит расчет и сделает
        один ререндер. Чтобы в слушателе последовательно выполнились несколько
        setState, каждый из которых основывается на вычислениях предыдущего,
        нужно в setState передавать не значение, а колбэк-функцию.
      </p>
      <p>
        Обновление объектов и массивов должно происходить с их заменой (через
        map, клонирование объекта с заменой свойств и тп)ю
      </p>
      <Parent generatedChildrenCount={3}></Parent>
    </div>
  );
}

export default UseStateRoute;
