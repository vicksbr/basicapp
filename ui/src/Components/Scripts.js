import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Done from "@material-ui/icons/Done";
import Cancel from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import TableHead from "@material-ui/core/TableHead"

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		minWidth: 700
	},
	iconCell: {
		width: "7.4em"
	},
	textField: {
		width: "8em"
	}
});

class ServiceTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceData: [
				{
					domain: "Domain 1",
					name: "Get Users"
				},
				{
					domain: "Domain 2",
					name: "Get Location"
				},
				{
					domain: "Domain 3",
					name: "Get Name"
				},
				{
					domain: "Domain 4",
					name: "Get Age"
				}
			],
			editedIndex: -1,
			editedDomain: "",
			editedName: ""
		};
	}
	deleteComponent(index) {
		const serviceData = this.state.serviceData.slice();
		serviceData.splice(index, 1);
		this.setState({ serviceData });
	}

	editComponent(index) {
		this.setState({ editedIndex: index });
	}
	cancelEdit = () => {
		this.setState({ editedIndex: -1 });
	};
	updateComponent(index) {
		const serviceData = this.state.serviceData.slice();
		serviceData[index].domain = this.state.editedDomain;
		serviceData[index].name = this.state.editedName;
		this.setState({
			serviceData,
			editedDomain: "",
			editedName: "",
			editedIndex: -1
		});
	}
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};
	render() {

		const { editedIndex, serviceData } = this.state;
		const { classes } = this.props;

		const deleteIcon = index => (
			<IconButton onClick={() => this.deleteComponent(index)}>
				<DeleteIcon color="secondary" />
			</IconButton>
		);

		const editIcon = index => (
			<IconButton onClick={() => this.editComponent(index)}>
				<EditIcon color="primary" />
			</IconButton>
		);

		const okBtn = index => (
			<IconButton onClick={() => this.updateComponent(index)}>
				<Done color="secondary" />
			</IconButton>
		);

		const cancelBtn = (
			<IconButton onClick={this.cancelEdit}>
				<Cancel color="primary" />
			</IconButton>
		);

		const editDomain = (
			<TextField
				id="domain"
				label="Domain"
				className={classes.textField}
				value={this.state.editedDomain}
				margin="normal"
				onChange={this.handleChange("editedDomain")}
			/>
		);
		const editName = (
			<TextField
				id="name"
				label="Name"
				className={classes.textField}
				value={this.state.editedName}
				margin="normal"
				onChange={this.handleChange("editedName")}
			/>
		);
		return (
			<Paper className={classes.root}>
				<div>
					<Table className={classes.table}>

						<TableHead>
							<TableRow>
								<TableCell>Edit</TableCell>
								<TableCell>Nome</TableCell>
								<TableCell>Last Login</TableCell>
							</TableRow>
						</TableHead>


						<TableBody>


							{serviceData.map(n => {
								return (
									<TableRow key={n.domain}>
										<TableCell
											className={classes.iconCell}
											component="th"
											scope="row"
										>
											<div style={divStyle}>
												{serviceData.indexOf(n) === editedIndex
													? okBtn(serviceData.indexOf(n))
													: deleteIcon(serviceData.indexOf(n))}
												{serviceData.indexOf(n) === editedIndex
													? cancelBtn
													: editIcon(serviceData.indexOf(n))}
											</div>
										</TableCell>
										<TableCell>
											{serviceData.indexOf(n) === editedIndex
												? editDomain
												: n.domain}
										</TableCell>
										<TableCell>
											{serviceData.indexOf(n) === editedIndex ? editName : n.name}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</Paper>
		);
	}
}

var divStyle = {
	display: 'flex',
};

export default withStyles(styles)(ServiceTable);
