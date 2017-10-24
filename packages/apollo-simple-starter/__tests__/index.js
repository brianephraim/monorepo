import App from '../client/components/App';
import TodaApolloListItem from '../client/components/TodaApolloListItem';

describe('App', () => {
	test('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
});

describe('TodaApollo', () => {
	test('renders a todaApollo item correctly', () => {
		const todaApollo = {
			id: 123,
			text: 'I am a todaApollo'
		};

		const todaApolloListItem = render(<TodaApolloListItem todaApollo={todaApollo} />);

		expect(todaApolloListItem.text()).toEqual(`x ${todaApollo.text}`);
	});
});
