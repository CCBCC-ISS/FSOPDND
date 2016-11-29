<%@ Page Title="FSOPDND" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FSOPDND._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div id="actions">
        <button type="button" id="reset">Reset Items</button>
    </div>

    <table class="grid left">
        <tr>
            <td>{ 1,  1 }</td>
            <td>{ 1,  2 }</td>
            <td>{ 1,  3 }</td>
        </tr>
        <tr>
            <td>{ 2,  1 }</td>
            <td>{ 2,  2 }</td>
            <td>{ 2,  3 }</td>
        </tr>
        <tr>
            <td>{ 3,  1 }</td>
            <td>{ 3,  2 }</td>
            <td>{ 3,  3 }</td>
        </tr>
        <tr>
            <td>{ 4,  1 }</td>
            <td>{ 4,  2 }</td>
            <td>{ 4,  3 }</td>
        </tr>
    </table>
    
    <table class="items grid right">
        <tr>
            <td>
                <p class="item" id="1">Item 1</p>
            </td>
            <td>
                <p class="item" id="2">Item 2</p>
            </td>
            <td>
                <p class="item" id="3">Item 3</p>
            </td>
        </tr>
        <tr>
           <td>
                <p class="item" id="4">Item 4</p>
            </td>
            <td>
                <p class="item" id="5">Item 5</p>
            </td>
            <td>
                <p class="item" id="6">Item 6</p>
            </td>
        </tr>
        <tr>
           <td>
                <p class="item" id="7">Item 7</p>
            </td>
            <td>
                <p class="item" id="8">Item 8</p>
            </td>
            <td></td> 
        </tr>
        <tr> 
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</asp:Content>
