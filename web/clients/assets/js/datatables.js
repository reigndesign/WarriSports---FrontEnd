function datatables() {
			return {
				headings: [
					{
						'key': 'betId',
						'value': 'Bet ID'
					},
					{
						'key': 'date',
						'value': 'Date'
					},
					{
						'key': 'event',
						'value': 'Event'
					},
					{
						'key': 'stake',
						'value': 'Stake (NGN)'
					},
					{
						'key': 'totalReturn',
						'value': 'Return (NGN)'
					},
					{
						'key': 'action',
						'value': 'Action'
					}
				],
				users: [{
					"betId": 1,
					"date": "12/18/2025",
					"stake": "150",
					"event": "Sportsbook",
					"totalReturn": "300",
					"action": "",
				},],
				selectedRows: [],

				open: false,
				
				toggleColumn(key) {
					// Note: All td must have the same class name as the headings key! 
					let columns = document.querySelectorAll('.' + key);

					if (this.$refs[key].classList.contains('hidden') && this.$refs[key].classList.contains(key)) {
						columns.forEach(column => {
							column.classList.remove('hidden');
						});
					} else {
						columns.forEach(column => {
							column.classList.add('hidden');
						});
					}
				},

				getRowDetail($event, id) {
					let rows = this.selectedRows;

					if (rows.includes(id)) {
						let index = rows.indexOf(id);
						rows.splice(index, 1);
					} else {
						rows.push(id);
					}
				},

				selectAllCheckbox($event) {
					let columns = document.querySelectorAll('.rowCheckbox');

					this.selectedRows = [];

					if ($event.target.checked == true) {
						columns.forEach(column => {
							column.checked = true
							this.selectedRows.push(parseInt(column.name))
						});
					} else {
						columns.forEach(column => {
							column.checked = false
						});
						this.selectedRows = [];
					}
				}
			}
		}